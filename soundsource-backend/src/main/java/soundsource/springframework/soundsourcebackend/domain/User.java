package soundsource.springframework.soundsourcebackend.domain;

import javax.persistence.*;

@Entity
@Table(name = "user")
public class User {

    @Id
    private String id;

    private String songURI;
    private String playlistName;

    public User() {
    }

    public User(String id, String songURI, String playlistName) {
        this.id = id;
        this.songURI = songURI;
        this.playlistName = playlistName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
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
