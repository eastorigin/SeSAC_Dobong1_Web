package _04_Exception;

import java.util.InputMismatchException;
import java.util.Scanner;

public class Prac2 {
    public static void main(String[] args) {
        Scanner scan = new Scanner(System.in);
        System.out.println("배열의 크기를 입력하세요");
        try {
            int number = scan.nextInt();
            if (number <= 0) {
                throw new IllegalArgumentException("배열의 크기는 1 이상이어야 합니다");
            }
            int[] arr = new int[number];
            double sum = 0;
            for (int i = 0; i < arr.length; i++) {
                System.out.println(i + "번째 인덱스 배열 요소를 입력해 주세요");
                arr[i] = scan.nextInt();
                sum += arr[i];
            }
            System.out.println("배열 요소의 평균: " + (sum / arr.length));
        } catch (InputMismatchException e) {
            System.out.println("정수를 입력해주세요");
        } catch (IllegalArgumentException e) {
            System.out.println(e.getMessage());
        } finally {
            scan.close();
        }
    }
}

