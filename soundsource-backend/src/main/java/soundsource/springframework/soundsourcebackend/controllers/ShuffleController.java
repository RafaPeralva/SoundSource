package soundsource.springframework.soundsourcebackend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.requests.data.player.ToggleShuffleForUsersPlaybackRequest;

import org.apache.hc.core5.http.ParseException;
import java.io.IOException;

import static soundsource.springframework.soundsourcebackend.controllers.AuthenticationController.spotifyApi;

@RestController
@RequestMapping("/api")
public class ShuffleController {

    @GetMapping(value = "shuffle")
    public static void toggleShuffleForUsersPlayback_Sync() {

        boolean state = !(CurrentPlaybackController.getShuffleState());

        final ToggleShuffleForUsersPlaybackRequest toggleShuffleForUsersPlaybackRequest = spotifyApi
                .toggleShuffleForUsersPlayback(state)
                .build();

        try {
            final String string = toggleShuffleForUsersPlaybackRequest.execute();

            System.out.println("Null: " + string);
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

}
