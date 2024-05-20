package _05_class.Practice;

import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

public class CalculatorPrac {
    public static void main(String[] args) {
        List<Rectangle> rectangles = new ArrayList<>();
        Scanner scan = new Scanner(System.in);
        while (true) {
            System.out.println("사각형의 가로와 세로 길이를 띄어쓰기를 기준으로 입력해주세요.");
            int width = scan.nextInt();
            int height = scan.nextInt();
            if (width == 0 && height == 0) {
                scan.close();
                break;
            }
            Rectangle rectangle = new Rectangle();
            rectangle.setWidth(width);
            rectangle.setHeight(height);
            rectangles.add(rectangle);
        }
        for (int i = 0; i < rectangles.size(); i++) {
            System.out.println("가로 길이는: " + rectangles.get(i).getWidth());
            System.out.println("세로 길이는: " + rectangles.get(i).getHeight());
            System.out.println("넓이는: " + rectangles.get(i).getArea());
            System.out.println("------------------------------");
        }
        System.out.println("Rectangle 인스터의 개수는 : " + rectangles.size());
    }
}
