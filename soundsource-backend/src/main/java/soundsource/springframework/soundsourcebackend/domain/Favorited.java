package soundsource.springframework.soundsourcebackend.domain;

public class Favorited {
    private String playlistName;
    private String playlistGenre;

    public Favorited() {
    }

    public Favorited(String playlistName, String playlistGenre) {
        this.playlistName = playlistName;
        this.playlistGenre = playlistGenre;
    }

    public String getPlaylistName() {
        return playlistName;
    }

    public void setPlaylistName(String playlistName) {
        this.playlistName = playlistName;
    }

    public String getPlaylistGenre() {
        return playlistGenre;
    }

    public void setPlaylistGenre(String playlistGenre) {
        this.playlistGenre = playlistGenre;
    }
}
