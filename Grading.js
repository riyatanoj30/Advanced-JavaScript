let result = 75;

switch (true) {
    case (result > 90):
        document.write("A");
        break;
    case (result > 80 && result <= 90):
        document.write("B");
        break;
    case (result > 70 && result <= 80):
        document.write("C");
        break;
    case (result > 60 && result <= 70):
        document.write("F");
        break;
    default:
        document.write("Fail");
}