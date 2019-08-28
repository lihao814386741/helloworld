class SimpleCounter {
    public count() {
        let count=4;
        for (let i = 1; i <= 8; i ++) {
            document.write(i.toString() + '<br>')
        }
        console.log("All done.");
    }
}
let count = new SimpleCounter();
count.count();