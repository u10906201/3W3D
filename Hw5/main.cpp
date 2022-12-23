#include <stdio.h>
#include <stdlib.h>
#include <math.h>

bool check(double radius, double x_center, double y_center, double x1, double y1, double x2, double y2, double velX, double velY) {
    int temp1 = 0, temp2 = 0;
    if (x_center > x1 && x_center < x2) {
      if (y_center + radius > (y1+y2)/2 && y_center - radius < y2 && velY < 0) {
      	temp1 = 1;
      }
      if (y_center + radius > y1 && y_center - radius < (y1+y2)/2 && velY > 0) {
        temp1 = 1;
      }
    }

    if (y_center > y1 && y_center < y2) {
      if (x_center + radius > (x1+x2)/2 && x_center - radius < x2 && velX < 0) {
        temp2 = 2;
      }
      if (x_center + radius > x1 && x_center - radius < (x1+x2)/2 && velX > 0) {
        temp2 = 2;
      }
    }

    return temp1 + temp2;
}

int main(int argc, char *argv[]) {	
    if ( argc != 10 ) {
    	printf("%d", 0);
		exit (1);
    }else {
    	double radius = atof(argv[1]);
		double x_center = atof(argv[2]);
		double y_center = atof(argv[3]);
		double x1 = atof(argv[4]);
		double y1 = atof(argv[5]);
		double x2 = atof(argv[6]);
		double y2 = atof(argv[7]);
		double velX = atof(argv[8]);
		double velY = atof(argv[9]);
		int hit = check(radius, x_center, y_center, x1, y1, x2, y2,velX,velY);
        printf("%d", hit);
    }
    exit(0);
}
