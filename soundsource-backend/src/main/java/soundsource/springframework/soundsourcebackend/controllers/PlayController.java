package soundsource.springframework.soundsourcebackend.controllers;

import com.wrapper.spotify.model_objects.miscellaneous.Device;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
public class PlayController {

    @GetMapping(value = "play")
    public void playSong(String[] q) {
        if(q == null)
            q = new String[]{"spotify:track:01iyCAUm8EvOFqVWYJ3dVX"};

        DeviceController.activateDevice();
        while(!DeviceController.isActiveDevice()){
        }

        for(int i = 0; i < q.length; i++) {
            if(i == 0) {
                QueueController.addItemToUsersPlaybackQueue_Sync(q[i]);
                SkipController.skipSong();
            } else {
                QueueController.addItemToUsersPlaybackQueue_Sync(q[i]);
            }
        }
    }


}
