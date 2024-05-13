package _03_array;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class Prac2 {
    public static void main(String[] args) {
        List<String> String = new ArrayList<>();
        Scanner scan = new Scanner(System.in);
        while (true) {
            System.out.println("문자를 입력해주세요. :");
            String a = scan.nextLine();
            if ("exit".equals(a)) {
                break;
            }
            String.add(a);
        }
        scan.close();

        for (int i = 0; i < String.size(); i++) {
            System.out.println(String.get(i));
        }
    }
}
