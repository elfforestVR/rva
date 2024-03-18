mod env {
    struct Path {
        field1: u8,
        field2: String,
    }
    pub fn str1() {
        let home_dir = Path {
            field1: 32,
            field2: "home".to_string(),
        };
    }
}

fn main() {
    println!("hello")
}
