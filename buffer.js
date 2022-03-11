var buf = Buffer.alloc(10);
console.log(buf);
buf.write("hello");
console.log(buf.toString());


var buf2 =  Buffer.from("welcome");
console.log(buf2);
console.log(buf2[0]);
console.log(buf2[1]);

console.log(buf2.toJSON());