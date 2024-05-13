package _03_array;

import java.util.Scanner;

public class Prac1 {
    public static void main(String[] args) {
        Prac1 ol = new Prac1();
        System.out.println("5개의 정수를 입력하세요");
        Scanner scan = new Scanner(System.in);
        int a = scan.nextInt();
        int b = scan.nextInt();
        int c = scan.nextInt();
        int d = scan.nextInt();
        int e = scan.nextInt();
        scan.close();
        System.out.println("평균은 " + (double) ol.even(a, b, c, d, e));
    }

    public double even(int a, int b, int c, int d, int e) {
        return (a + b + c + d + e) / 5.0;
    }
}
