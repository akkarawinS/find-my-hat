ตอนแรกผมลองทำแบบไม่ใช้ oop แล้วปวดหัววุ่นวาย เลยมาส่องrepoคนอื่นๆดูเห็นแต่คนอื่นใช้oopกันผมเลยใช้บ้าง5555

หลังจากไปนั่งวิเคราห์codeชาวบ้านดูสักพักแล้ว ก็เห็นว่าหลายๆคนก็เขียนคล้ายๆกันคือ จะมีpropertyคล้ายๆกันคือ มี พวกfield กับ player location แล้วก็ boolean ที่เอาไว้check logicของเกมisPlaying ว่าเป็น true หรือ false เอาไว้break loop
ในที่นี้จะใช้เป็น2D array เพราะใช้คำนวณหาplayer locationง่ายกว่า555 
method print map คือเอาไว้เรียกใช้หลังgen map เอาไว้join array เอาตัว''ออกให้mapสะอาดตา

method move input เอาไว้รับuse inputว่าจะเดินไปทางไหน ใช้ logic if else เอาง่ายสุดละครับ555

legalcheck เอาไว้เช็คlogic ถ้าเดินออกmapหรือเดินตกหลุม

method fieldgen ก็รับ parameter มา 3 ตัว เอามาgen map เป็น array รัว h มาคำนวณ ความกวาง w มาคำนวณกับความยาว ส่วนp มาคำนวณความเยอะของหลุม


 โดยการสรา้งarrayเปล่ามาก่อน ผ่าน method map 
 new Array(แถวแกนy).fill(0).map(() => new Array(แถวแกนX).fill('[]'))
