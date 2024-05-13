package _02_control_statement;

public class Prac3 {
    public static void main(String[] args) {
        System.out.println("반지름이 5인 원의 넓이: " + circle(5));
        System.out.println("가로 4, 세로 7인 직사각형의 넓이: " + rectangle(4, 7));
        System.out.println("밑변 6, 높이 3인 삼각형의 넓이: " + triangle(6, 3));

    }

    public static double circle(double a) {
        return a * a * Math.PI;
    }

    public static double rectangle(double b, double c) {
        return b * c;
    }

    public static double triangle(double d, double e) {
        return d * e / 2;
    }
}
