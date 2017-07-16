package lee.plus.plus

class BlogPost {
    String title
    String text
    Date dateCreated
    Date lastUpdated

    static constraints = {
        title nullable: false, blank: false
        text nullable: false, blank: false
        dateCreated nullable: true
        lastUpdated nullable: true
    }
}
