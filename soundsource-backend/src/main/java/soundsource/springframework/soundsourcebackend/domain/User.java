package soundsource.springframework.soundsourcebackend.domain;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {

    @Id
    private String UserId;

    private String songURI;
    private String playlistName;

    public User() {
    }

    public User(String userId, String songURI, String playlistName) {
        UserId = userId;
        this.songURI = songURI;
        this.playlistName = playlistName;
    }

    public String getUserId() {
        return UserId;
    }

    public void setUserId(String userId) {
        UserId = userId;
    }

    public String getSongURI() {
        return songURI;
    }

    public void setSongURI(String songURI) {
        this.songURI = songURI;
    }

    public String getPlaylistName() {
        return playlistName;
    }

    public void setPlaylistName(String playlistName) {
        this.playlistName = playlistName;
    }
}
