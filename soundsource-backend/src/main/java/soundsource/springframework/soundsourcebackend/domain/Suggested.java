package soundsource.springframework.soundsourcebackend.domain;

public class Suggested {
    private String songName;
    private String playlistName;
    private String status;

    public Suggested(String songName, String playlistName, String status) {
        this.songName = songName;
        this.playlistName = playlistName;
        this.status = status;
    }

    public Suggested() {
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
