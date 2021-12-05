package soundsource.springframework.soundsourcebackend.domain;

import javax.persistence.*;
import java.util.Objects;

@Entity
@Table(name = "suggested")
public class Suggested {

    @Id
//    @GeneratedValue(strategy = GenerationType.AUTO)
    private String id;

    private String playlistName;
    private String trackName;
    private String artistName;
    private int upvoteCount;

    public Suggested() {
    }

    public Suggested(String id, String trackName, int upvoteCount, String artistName, String playlistName) {
        this.id = id;
        this.playlistName = playlistName;
        this.trackName = trackName;
        this.upvoteCount = upvoteCount;
        this.artistName = artistName;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public int getUpvoteCount() {
        return upvoteCount;
    }

    public void setUpvoteCount(int upvoteCount) {
        this.upvoteCount = upvoteCount;
    }

    public String getTrackName() {
        return trackName;
    }

    public void setTrackName(String trackName) {
        this.trackName = trackName;
    }

    public String getArtistName() {
        return artistName;
    }

    public void setArtistName(String artistName) {
        this.artistName = artistName;
    }

    public String getPlaylistName() {
        return playlistName;
    }

    public void setPlaylistName(String playlistName) {
        this.playlistName = playlistName;
    }

    @Override
    public String toString() {
        return "Suggested{" +
                "id=" + id +
                ", trackName='" + trackName + '\'' +
                ", upvoteCount='" + upvoteCount + '\'' +
                ", artistName='" + artistName + '\'' +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Suggested suggested = (Suggested) o;
        return Objects.equals(id, suggested.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
