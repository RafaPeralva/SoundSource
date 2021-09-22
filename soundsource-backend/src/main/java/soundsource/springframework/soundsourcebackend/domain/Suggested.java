package soundsource.springframework.soundsourcebackend.domain;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Suggested {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String songName;
    private String playlistName;
    private String status;

    public Suggested() {
    }

    public Suggested(String songName, String playlistName, String status) {
        this.songName = songName;
        this.playlistName = playlistName;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSongName() {
        return songName;
    }

    public void setSongName(String songName) {
        this.songName = songName;
    }

    public String getPlaylistName() {
        return playlistName;
    }

    public void setPlaylistName(String playlistName) {
        this.playlistName = playlistName;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
