package soundsource.springframework.soundsourcebackend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.requests.data.player.TransferUsersPlaybackRequest;

import com.google.gson.JsonArray;
import com.google.gson.JsonParser;

import org.apache.hc.core5.http.ParseException;
import java.io.IOException;

import static soundsource.springframework.soundsourcebackend.controllers.AuthenticationController.spotifyApi;

@RestController
@RequestMapping("/api")
public class TransferController {

    @GetMapping(value = "transfer")
    public static void transferUsersPlayback_Sync(String deviceId) {

        final JsonArray deviceIds = JsonParser.parseString("[\"" + deviceId + "\"]").getAsJsonArray();

        final TransferUsersPlaybackRequest transferUsersPlaybackRequest = spotifyApi
                .transferUsersPlayback(deviceIds)
                .build();

        try {
            final String string = transferUsersPlaybackRequest.execute();

            System.out.println("Transfer Device Completed: " + string);
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
