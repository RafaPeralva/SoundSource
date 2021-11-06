package soundsource.springframework.soundsourcebackend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.miscellaneous.Device;
import com.wrapper.spotify.requests.data.player.GetUsersAvailableDevicesRequest;

import org.apache.hc.core5.http.ParseException;

import javax.persistence.Table;
import java.io.IOException;

import static soundsource.springframework.soundsourcebackend.controllers.AuthenticationController.spotifyApi;

@RestController
@RequestMapping("/api")
public class DeviceController {

    @GetMapping(value = "device")
    public static void activateDevice() {

        final GetUsersAvailableDevicesRequest getUsersAvailableDevicesRequest = spotifyApi
                .getUsersAvailableDevices()
                .build();

        try {
            final Device[] devices = getUsersAvailableDevicesRequest.execute();

            if(devices.length == 0) {
                // open up an application - ig browser would be safest bet
            } else {
                if(!isActiveDevice()) {
                    System.out.println("Finding Device");
                    final String deviceId = devices[devices.length - 1].getId();
                    TransferController.transferUsersPlayback_Sync(deviceId);
                } else {
                    System.out.println("Device Already Active");
                }
            }

        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

    public static boolean isActiveDevice()
    {
        System.out.println("Checking for Active Device");
        final GetUsersAvailableDevicesRequest getUsersAvailableDevicesRequest = spotifyApi
                .getUsersAvailableDevices()
                .build();

        try {
            final Device[] devices = getUsersAvailableDevicesRequest.execute();

            if(devices.length == 0) {
                return false;
            } else {
                for (int i = 0; i < devices.length; i++) {
                    if (devices[i].getIs_active()) {
                        return true;
                    }
                }
            }
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
            return false;
        }
        return false;
    }

}
