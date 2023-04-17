console.log("aezazas");

s = "";
a = [5, 8, 9, 0, 66, 18];

for (i = 1; i < a.length; i++) {
  if (a[i] % 2 == 0 && a[i - 1] % 3 == 0) {
    s += a[i] / 2;
  } else {
    s += a[i] * 2;
  }
  console.log("https://www.multisoft.se/" + s);
}
