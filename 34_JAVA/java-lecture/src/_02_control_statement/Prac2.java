package _02_control_statement;

import java.util.Scanner;

public class Prac2 {
    public static void main(String[] args) {
        Prac2 ol = new Prac2();
        System.out.println("숫자 두 개를 입력하세요");
        Scanner scan = new Scanner(System.in);
        double a = scan.nextInt();
        double b = scan.nextInt();
        System.out.println("덧셈 결과 : " + ol.add(a, b));
        System.out.println("뺄셈 결과 : " + ol.minus(a, b));
        System.out.println("나눗셈 결과 : " + ol.divide(a, b));
        System.out.println("곱셈 결과 : " + ol.multiple(a, b));
    }

    public double add(double a, double b) {
        return a + b;
    }

    public double minus(double a, double b) {
        return a - b;
    }

    public double divide(double a, double b) {
        return a / b;
    }

    public double multiple(double a, double b) {
        return a * b;
    }
}
