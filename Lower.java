public class Lower {
    public static void main(String[] args) {
        String input = "Java@754program";
        String output = convertToUppercase(input);
        System.out.println(output);
    }

    public static String convertToUppercase(String input) {
        StringBuilder result = new StringBuilder();
        for (int i = 0; i < input.length(); i++) {
            char currentChar = input.charAt(i);
            if (Character.isLowerCase(currentChar)) {
                result.append(Character.toUpperCase(currentChar));
            } else {
                result.append(currentChar);
            }
        }
        return result.toString();
    }
}
