public class code {
    void public main(String[] args) {
        System.out.println("Hello, World!");
        if (args.length > 0) {
            System.out.println("Arguments provided: " + String.join(", ", args));
        } else {
            System.out.println("No arguments provided.");
        }
    }
}
