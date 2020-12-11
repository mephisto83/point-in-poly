import Point from './point';
import CFG from './cfg';
// Driver Code 
export default function test() {
    let polygon1: Point[] = [
        new Point(0, 0),
        new Point(10, 0),
        new Point(10, 10),
        new Point(0, 10)
    ];
    let n: number = polygon1.length;
    let p: Point = new Point(20, 20);
    if (CFG.isInside(polygon1, n, p)) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
    p = new Point(5, 5);
    if (CFG.isInside(polygon1, n, p)) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
    let polygon2: Point[] = [
        new Point(0, 0),
        new Point(5, 5),
        new Point(5, 0)
    ];
    p = new Point(3, 3);
    n = polygon2.length;
    if (CFG.isInside(polygon2, n, p)) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
    p = new Point(5, 1);
    if (CFG.isInside(polygon2, n, p)) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
    p = new Point(8, 1);
    if (CFG.isInside(polygon2, n, p)) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
    let polygon3: Point[] = [
        new Point(0, 0),
        new Point(10, 0),
        new Point(10, 10),
        new Point(0, 10)];
        
    p = new Point(-1, 10);
    n = polygon3.length;
    if (CFG.isInside(polygon3, n, p)) {
        console.log("Yes");
    }
    else {
        console.log("No");
    }
}