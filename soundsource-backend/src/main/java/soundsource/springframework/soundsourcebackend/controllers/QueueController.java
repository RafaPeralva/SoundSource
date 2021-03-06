package soundsource.springframework.soundsourcebackend.controllers;

import com.wrapper.spotify.model_objects.miscellaneous.Device;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.requests.data.player.AddItemToUsersPlaybackQueueRequest;

import org.apache.hc.core5.http.ParseException;
import java.io.IOException;

import static soundsource.springframework.soundsourcebackend.controllers.AuthenticationController.spotifyApi;

@RestController
@RequestMapping("/api")
public class QueueController {

    @GetMapping(value = "queue")
    public static void addItemToUsersPlaybackQueue_Sync(String q) {
        System.out.println("Queuing Song");

        if(q == null)
            q = "spotify:track:01iyCAUm8EvOFqVWYJ3dVX"; // Dancing Queen - Abba

        final AddItemToUsersPlaybackQueueRequest addItemToUsersPlaybackQueueRequest = spotifyApi
                .addItemToUsersPlaybackQueue(q)
                .build();

        try {
            final String string = addItemToUsersPlaybackQueueRequest.execute();

            System.out.println("Queuing Song Completed: " + string);
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }
}
