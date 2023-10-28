// Trimming ;)

let school = "        TechGlobal School        ";
let t1 = school.trim();                                 // Trims all white spaces (spaces, blanks) on the ends of a string
let t2 = school.trimStart();                            // Trims white spaces at the start
let t3 = school.trimEnd();                              // Trims white spaces at the end

console.log(school);                                    // "        TechGlobal School         "
console.log(school.length);
console.log(t1);                                        // "TechGlobal School"
console.log(t1.length);
console.log(t2);                                        // "TechGlobal School         "
console.log(t2.length);
console.log(t3);                                        // "        TechGlobal School"
console.log(t3.length);

console.log("     abc     ".trim());                    // trim can be used like this as well
console.log("     Hello     ".trim().length);           // commands can be chained together like this, as it will re-read the line left to right