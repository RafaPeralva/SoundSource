package soundsource.springframework.soundsourcebackend.domain;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "user")
public class User {

    @Id
    private String UserId;

    private String likedSongName;
    private String likedSongArtist;
    private String playlistName;

    public User() {
    }

    public User(String userId, String likedSongName, String likedSongArtist, String playlistName) {
        UserId = userId;
        this.likedSongName = likedSongName;
        this.likedSongArtist = likedSongArtist;
        this.playlistName = playlistName;
    }

    public String getUserId() {
        return UserId;
    }

    public void setUserId(String userId) {
        UserId = userId;
    }

    public String getLikedSongName() {
        return likedSongName;
    }

    public void setLikedSongName(String likedSongName) {
        this.likedSongName = likedSongName;
    }

    public String getLikedSongArtist() {
        return likedSongArtist;
    }

    public void setLikedSongArtist(String likedSongArtist) {
        this.likedSongArtist = likedSongArtist;
    }

    public String getPlaylistName() {
        return playlistName;
    }

    public void setPlaylistName(String playlistName) {
        this.playlistName = playlistName;
    }
}
