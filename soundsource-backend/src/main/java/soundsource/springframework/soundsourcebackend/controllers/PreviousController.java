package soundsource.springframework.soundsourcebackend.controllers;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.requests.data.player.SkipUsersPlaybackToPreviousTrackRequest;

import org.apache.hc.core5.http.ParseException;
import java.io.IOException;

import static soundsource.springframework.soundsourcebackend.controllers.AuthenticationController.spotifyApi;

@RestController
@RequestMapping("/api")
public class PreviousController {

    @GetMapping(value = "previous")
    public static void skipUsersPlaybackToPreviousTrack_Sync() {

        final SkipUsersPlaybackToPreviousTrackRequest skipUsersPlaybackToPreviousTrackRequest = spotifyApi
                .skipUsersPlaybackToPreviousTrack()
                .build();

        try {
            final String string = skipUsersPlaybackToPreviousTrackRequest.execute();

            System.out.println("Null: " + string);
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

}
