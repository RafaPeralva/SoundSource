package soundsource.springframework.soundsourcebackend.domain;

import javax.persistence.*;
import java.util.Objects;
import java.util.Set;

//Set up entities for user to be stored as a table within the database
@Entity
public class User {
    //generate id/private key for each user
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String firstName;
    private String lastName;
    private String userName;
    private String email;

    //establish one to many relationship between users and favorited
    @OneToMany
    private Set<Favorited> favorite;

    //establish one to many relationship between users and favorited
    @OneToMany
    private Set<Suggested> suggest;

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

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    @Override
    public String toString() {
        return "User{" +
                "id=" + id +
                ", firstName='" + firstName + '\'' +
                ", lastName='" + lastName + '\'' +
                ", userName='" + userName + '\'' +
                ", email='" + email + '\'' +
                ", favorite=" + favorite +
                ", suggest=" + suggest +
                '}';
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        User user = (User) o;
        return Objects.equals(id, user.id);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id);
    }
}
