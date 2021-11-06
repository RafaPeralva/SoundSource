package soundsource.springframework.soundsourcebackend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.wrapper.spotify.exceptions.SpotifyWebApiException;
import com.wrapper.spotify.model_objects.specification.User;
import com.wrapper.spotify.requests.data.users_profile.GetCurrentUsersProfileRequest;

import org.apache.hc.core5.http.ParseException;
import java.io.IOException;

import static soundsource.springframework.soundsourcebackend.controllers.AuthenticationController.spotifyApi;

@RestController
@RequestMapping("/api")
public class UserController {

    @GetMapping(value = "userId")
    public static String getUserId() {

        final GetCurrentUsersProfileRequest getCurrentUsersProfileRequest = spotifyApi.getCurrentUsersProfile()
                .build();

        try {
            final User user = getCurrentUsersProfileRequest.execute();
            System.out.println("Display name: " + user.getDisplayName() + " : " + user.getId());
            return user.getId();
        } catch (IOException | SpotifyWebApiException | ParseException e) {
            System.out.println("Error: " + e.getMessage());
            return "ERROR";
        }
    }
}
