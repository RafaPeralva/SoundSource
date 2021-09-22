package soundsource.springframework.soundsourcebackend.domain;

import java.util.Set;

public class User {
    public User() {
    }

    public User(String firstName, String lastName, String userName, String email, Set<Favorited> favorite, Set<Suggested> suggest) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.userName = userName;
        this.email = email;
        this.favorite = favorite;
        this.suggest = suggest;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public Set<Favorited> getFavorite() {
        return favorite;
    }

    public void setFavorite(Set<Favorited> favorite) {
        this.favorite = favorite;
    }

    public Set<Suggested> getSuggest() {
        return suggest;
    }

    public void setSuggest(Set<Suggested> suggest) {
        this.suggest = suggest;
    }

    private String firstName;
    private String lastName;
    private String userName;
    private String email;
    private Set<Favorited> favorite;
    private Set<Suggested> suggest;
}
