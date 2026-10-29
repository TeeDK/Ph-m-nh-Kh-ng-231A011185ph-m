
const chapters = [
    {
        id: 1,
        title: "Tổng quan về Java",
        description: "Lịch sử Java, JDK, JRE, JVM và chương trình Java đầu tiên.",
        theory: "Java là ngôn ngữ lập trình hướng đối tượng, có tính đa nền tảng nhờ JVM. JDK cung cấp công cụ phát triển, JRE cung cấp môi trường chạy và JVM thực thi bytecode.",
        example: 'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello Java");\n    }\n}'
    },
    {
        id: 2,
        title: "Biến và kiểu dữ liệu",
        description: "Khai báo biến, kiểu nguyên thủy, toán tử và nhập xuất.",
        theory: "Java có các kiểu nguyên thủy như int, double, char, boolean. Biến phải được khai báo kiểu dữ liệu trước khi sử dụng. Scanner hỗ trợ nhập dữ liệu từ bàn phím.",
        example: 'import java.util.Scanner;\n\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        System.out.println(a + b);\n    }\n}'
    },
    {
        id: 3,
        title: "Câu lệnh điều kiện",
        description: "Sử dụng if, else, switch và toán tử logic.",
        theory: "Câu lệnh if/else giúp chương trình lựa chọn nhánh thực hiện theo điều kiện boolean. switch phù hợp khi cần xử lý nhiều trường hợp của cùng một biểu thức.",
        example: 'int n = 7;\nif (n % 2 == 0) {\n    System.out.println("Chan");\n} else {\n    System.out.println("Le");\n}'
    },
    {
        id: 4,
        title: "Vòng lặp",
        description: "Lặp với for, while, do-while, break và continue.",
        theory: "for thường dùng khi biết số lần lặp. while kiểm tra điều kiện trước mỗi vòng. do-while thực hiện thân vòng lặp ít nhất một lần.",
        example: 'for (int i = 1; i <= 5; i++) {\n    System.out.println(i);\n}'
    },
    {
        id: 5,
        title: "Mảng và chuỗi",
        description: "Mảng một chiều, duyệt mảng, String và xử lý dữ liệu.",
        theory: "Mảng lưu nhiều giá trị cùng kiểu dữ liệu và truy cập bằng chỉ số bắt đầu từ 0. String biểu diễn chuỗi ký tự; có thể dùng length(), charAt(), equals() và các phương thức xử lý chuỗi khác.",
        example: 'int[] a = {2, 4, 6, 8};\nint sum = 0;\nfor (int x : a) {\n    sum += x;\n}\nSystem.out.println(sum);'
    },
    {
        id: 6,
        title: "Lập trình hướng đối tượng",
        description: "Class, object, constructor, kế thừa và đóng gói.",
        theory: "Lập trình hướng đối tượng tổ chức chương trình bằng lớp và đối tượng. Các khái niệm quan trọng gồm đóng gói, kế thừa, đa hình và trừu tượng hóa.",
        example: 'class Student {\n    String name;\n    Student(String name) {\n        this.name = name;\n    }\n    void display() {\n        System.out.println(name);\n    }\n}\n\npublic class Main {\n    public static void main(String[] args) {\n        Student s = new Student("An");\n        s.display();\n    }\n}'
    }
];

const initialExercises = [
    {id:"e1",chapter:1,title:"In lời chào Java",difficulty:"Dễ",description:"Viết chương trình in ra Hello Java.",solution:'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Hello Java");\n    }\n}',tests:5},
    {id:"e2",chapter:1,title:"In thông tin sinh viên",difficulty:"Dễ",description:"In họ tên và mã sinh viên trên hai dòng riêng biệt.",solution:'public class Main {\n    public static void main(String[] args) {\n        System.out.println("Nguyen Van An");\n        System.out.println("SV001");\n    }\n}',tests:5},
    {id:"e3",chapter:2,title:"Tính tổng hai số",difficulty:"Dễ",description:"Nhập hai số nguyên a, b. In tổng a + b.",solution:'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt();\n        int b = sc.nextInt();\n        System.out.println(a + b);\n    }\n}',tests:5},
    {id:"e4",chapter:2,title:"Tính diện tích hình chữ nhật",difficulty:"Dễ",description:"Nhập chiều dài và chiều rộng. In diện tích hình chữ nhật.",solution:'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        double a = sc.nextDouble();\n        double b = sc.nextDouble();\n        System.out.println(a * b);\n    }\n}',tests:5},
    {id:"e5",chapter:3,title:"Kiểm tra chẵn lẻ",difficulty:"Dễ",description:"Nhập số nguyên n. In Chan nếu n chẵn, ngược lại in Le.",solution:'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        System.out.println(n % 2 == 0 ? "Chan" : "Le");\n    }\n}',tests:5},
    {id:"e6",chapter:3,title:"Tìm số lớn nhất",difficulty:"Trung bình",description:"Nhập ba số nguyên. In ra số lớn nhất.",solution:'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int a = sc.nextInt(), b = sc.nextInt(), c = sc.nextInt();\n        System.out.println(Math.max(a, Math.max(b, c)));\n    }\n}',tests:5},
    {id:"e7",chapter:4,title:"Tính tổng từ 1 đến n",difficulty:"Dễ",description:"Nhập số nguyên n không âm. Tính tổng các số từ 1 đến n.",solution:'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        long sum = 0;\n        for (int i = 1; i <= n; i++) sum += i;\n        System.out.println(sum);\n    }\n}',tests:5},
    {id:"e8",chapter:4,title:"Bảng cửu chương",difficulty:"Trung bình",description:"Nhập n. In bảng nhân n từ 1 đến 10, mỗi kết quả trên một dòng.",solution:'import java.util.Scanner;\npublic class Main {\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        int n = sc.nextInt();\n        for (int i = 1; i <= 10; i++)\n            System.out.println(n + " x " + i + " = " + (n * i));\n    }\n}',tests:5},
    {id:"e9",chapter:5,title:"Tính tổng mảng",difficulty:"Trung bình",description:"Cho mảng số nguyên. Tính tổng các phần tử trong mảng.",solution:'int[] a = {1, 2, 3, 4, 5};\nint sum = 0;\nfor (int x : a) sum += x;\nSystem.out.println(sum);',tests:5},
    {id:"e10",chapter:5,title:"Đếm nguyên âm",difficulty:"Khó",description:"Cho một chuỗi. Đếm số ký tự nguyên âm a, e, i, o, u không phân biệt chữ hoa, chữ thường.",solution:'String s = "Hello Java".toLowerCase();\nint count = 0;\nfor (int i = 0; i < s.length(); i++) {\n    if ("aeiou".indexOf(s.charAt(i)) >= 0) count++;\n}\nSystem.out.println(count);',tests:5},
    {id:"e11",chapter:6,title:"Tạo lớp Student",difficulty:"Trung bình",description:"Tạo lớp Student có thuộc tính name và phương thức hiển thị tên.",solution:'class Student {\n    String name;\n    Student(String name) { this.name = name; }\n    void display() { System.out.println(name); }\n}',tests:5},
    {id:"e12",chapter:6,title:"Quản lý thông tin sinh viên",difficulty:"Khó",description:"Tạo lớp Student gồm mã sinh viên, họ tên và phương thức hiển thị thông tin.",solution:'class Student {\n    String id, name;\n    Student(String id, String name) {\n        this.id = id;\n        this.name = name;\n    }\n    void display() {\n        System.out.println(id + " - " + name);\n    }\n}',tests:5}
];

const STORAGE = {
    custom: "javalearn_custom_v1",
    results: "javalearn_results_v1",
    student: "javalearn_student_v1"
};

let customExercises = load(STORAGE.custom, []);
let results = load(STORAGE.results, []);
let selectedExerciseId = null;

function load(key, fallback) {
    try {
        const value = localStorage.getItem(key);
        return value ? JSON.parse(value) : fallback;
    } catch {
        return fallback;
    }
}

function save(key, value) {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.warn("Khong the luu du lieu tren trinh duyet.", error);
    }
}

function allExercises() {
    return [...initialExercises, ...customExercises];
}

function escapeHTML(value) {
    return String(value ?? "").replace(/[&<>"']/g, char => ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;"
    })[char]);
}

function difficultyClass(level) {
    if (level === "Khó") return "hard";
    if (level === "Trung bình") return "medium";
    return "";
}

function renderChapters() {
    const grid = document.getElementById("chapterGrid");
    grid.innerHTML = chapters.map(chapter => `
        <article class="chapter-card" id="chapter-${chapter.id}">
            <div class="chapter-number">${String(chapter.id).padStart(2, "0")}</div>
            <h3>${escapeHTML(chapter.title)}</h3>
            <p>${escapeHTML(chapter.description)}</p>
            <button type="button" data-chapter="${chapter.id}">Xem lý thuyết & ví dụ →</button>
            <div class="chapter-detail" id="detail-${chapter.id}" hidden>
                <p><strong>Lý thuyết:</strong> ${escapeHTML(chapter.theory)}</p>
                <pre class="solution-preview">${escapeHTML(chapter.example)}</pre>
                <button type="button" data-practice-chapter="${chapter.id}">Luyện tập chương này ↓</button>
            </div>
        </article>
    `).join("");

    grid.querySelectorAll("[data-chapter]").forEach(button => {
        button.addEventListener("click", () => {
            const detail = document.getElementById("detail-" + button.dataset.chapter);
            detail.hidden = !detail.hidden;
            button.textContent = detail.hidden
                ? "Xem lý thuyết & ví dụ →"
                : "Thu gọn lý thuyết ↑";
        });
    });

    grid.querySelectorAll("[data-practice-chapter]").forEach(button => {
        button.addEventListener("click", () => {
            document.getElementById("practice").scrollIntoView({behavior:"smooth"});
            document.getElementById("searchExercise").value = "";
            document.getElementById("difficultyFilter").value = "all";
            renderExercises(Number(button.dataset.practiceChapter));
        });
    });
}

function renderExercises(chapterFilter = null) {
    const list = document.getElementById("exerciseList");
    const search = document.getElementById("searchExercise").value.trim().toLowerCase();
    const difficulty = document.getElementById("difficultyFilter").value;

    const filtered = allExercises().filter(exercise => {
        const matchesSearch = (exercise.title + " " + exercise.description).toLowerCase().includes(search);
        const matchesDifficulty = difficulty === "all" || exercise.difficulty === difficulty;
        const matchesChapter = chapterFilter === null || exercise.chapter === chapterFilter;
        return matchesSearch && matchesDifficulty && matchesChapter;
    });

    if (!filtered.length) {
        list.innerHTML = '<div class="empty-state">Không tìm thấy bài tập phù hợp.</div>';
        return;
    }

    list.innerHTML = filtered.map(exercise => `
        <article class="exercise-item ${selectedExerciseId === exercise.id ? "selected" : ""}">
            <div class="exercise-meta">
                <span class="pill ${difficultyClass(exercise.difficulty)}">${escapeHTML(exercise.difficulty)}</span>
                <small>Chương ${exercise.chapter} · 10 điểm</small>
            </div>
            <h4>${escapeHTML(exercise.title)}</h4>
            <p>${escapeHTML(exercise.description)}</p>
            <button type="button" data-select-exercise="${escapeHTML(exercise.id)}">Chọn bài này</button>
        </article>
    `).join("");

    list.querySelectorAll("[data-select-exercise]").forEach(button => {
        button.addEventListener("click", () => selectExercise(button.dataset.selectExercise));
    });
}

function selectExercise(id) {
    const exercise = allExercises().find(item => item.id === id);
    if (!exercise) return;

    selectedExerciseId = id;
    document.getElementById("selectedExercise").innerHTML =
        `<strong>${escapeHTML(exercise.title)}</strong><br>` +
        `Chương ${exercise.chapter} · ${escapeHTML(exercise.difficulty)} · ` +
        `${exercise.tests || 5} bài kiểm tra mẫu<br>` +
        escapeHTML(exercise.description);

    document.getElementById("codeEditor").value =
        'public class Main {\n    public static void main(String[] args) {\n        // Viet loi giai tai day\n    }\n}';

    document.getElementById("resultBox").classList.remove("show");
    document.getElementById("resultBox").textContent = "";
    renderExercises();
}

function showSolution() {
    const exercise = allExercises().find(item => item.id === selectedExerciseId);
    if (!exercise) {
        alert("Bạn hãy chọn bài tập trước.");
        return;
    }

    document.getElementById("codeEditor").value = exercise.solution;
    document.getElementById("resultBox").classList.add("show");
    document.getElementById("resultBox").innerHTML =
        "<strong>Lời giải mẫu đã được điền vào khung code.</strong>" +
        "<br>Hãy đọc và hiểu từng dòng trước khi tự viết lại.";
}

function submitCode() {
    const name = document.getElementById("studentName").value.trim();
    const studentId = document.getElementById("studentId").value.trim();
    const code = document.getElementById("codeEditor").value.trim();
    const exercise = allExercises().find(item => item.id === selectedExerciseId);
    const resultBox = document.getElementById("resultBox");

    if (!name || !studentId) {
        alert("Vui lòng nhập họ tên và mã số sinh viên.");
        return;
    }

    if (!exercise) {
        alert("Bạn hãy chọn một bài tập trước khi nộp.");
        return;
    }

    if (!code) {
        alert("Bạn chưa nhập mã nguồn.");
        return;
    }

    /*
      DEMO FRONT-END:
      Chưa biên dịch hay chạy Java. Điểm bên dưới chỉ là điểm minh họa
      dựa trên việc người học nhập code, không chứng minh code đúng.
      Muốn chấm thật cần backend biên dịch Java và chạy test case.
    */
    const score = 0;

    const result = {
        name,
        studentId,
        exerciseTitle: exercise.title,
        score,
        time: new Date().toLocaleString("vi-VN"),
        note: "Chưa chấm thực tế"
    };

    results.unshift(result);
    results = results.slice(0, 50);
    save(STORAGE.results, results);
    save(STORAGE.student, {name, studentId});
    renderResults();

    resultBox.classList.add("show");
    resultBox.innerHTML =
        `<strong>Đã ghi nhận bài nộp.</strong><br>` +
        `Sinh viên: ${escapeHTML(name)} (${escapeHTML(studentId)})<br>` +
        `Bài tập: ${escapeHTML(exercise.title)}<br>` +
        `Điểm tự động: Chưa có — hệ thống hiện chưa chạy trình biên dịch Java.<br>` +
        `<small>Đây là bản giao diện demo; điểm chưa phản ánh độ đúng của chương trình.</small>`;
}

function renderResults() {
    const body = document.getElementById("resultsBody");
    if (!results.length) {
        body.innerHTML = '<tr><td colspan="5">Chưa có kết quả nào.</td></tr>';
        return;
    }

    body.innerHTML = results.map(result => `
        <tr>
            <td>${escapeHTML(result.name)}</td>
            <td>${escapeHTML(result.studentId)}</td>
            <td>${escapeHTML(result.exerciseTitle)}</td>
            <td>${result.note === "Chưa chấm thực tế" ? "Chưa chấm" : escapeHTML(result.score)}</td>
            <td>${escapeHTML(result.time)}</td>
        </tr>
    `).join("");
}

function renderCustomExercises() {
    const container = document.getElementById("customExerciseList");
    if (!customExercises.length) {
        container.innerHTML = '<div class="empty-state">Chưa có bài tập tự tạo.</div>';
        return;
    }

    container.innerHTML = customExercises.map(exercise => `
        <div class="custom-row">
            <div>
                <strong>${escapeHTML(exercise.title)}</strong><br>
                <span>Chương ${exercise.chapter} · ${escapeHTML(exercise.difficulty)}</span>
            </div>
            <button type="button" data-delete-custom="${escapeHTML(exercise.id)}">Xóa</button>
        </div>
    `).join("");

    container.querySelectorAll("[data-delete-custom]").forEach(button => {
        button.addEventListener("click", () => {
            customExercises = customExercises.filter(item => item.id !== button.dataset.deleteCustom);
            save(STORAGE.custom, customExercises);

            if (selectedExerciseId === button.dataset.deleteCustom) {
                selectedExerciseId = null;
                document.getElementById("selectedExercise").textContent =
                    "Hãy chọn một bài tập trong danh sách phía trên.";
            }

            renderCustomExercises();
            renderExercises();
        });
    });
}

function createExercise(event) {
    event.preventDefault();

    const title = document.getElementById("newTitle").value.trim();
    const chapter = Number(document.getElementById("newChapter").value);
    const difficulty = document.getElementById("newDifficulty").value;
    const description = document.getElementById("newDescription").value.trim();
    const solution = document.getElementById("newSolution").value.trim();

    if (!title || !description || !solution) {
        document.getElementById("teacherMessage").textContent =
            "Vui lòng điền đầy đủ tên bài, đề bài và lời giải.";
        return;
    }

    const exercise = {
        id: "custom-" + Date.now(),
        chapter,
        title,
        difficulty,
        description,
        solution,
        tests: 5,
        custom: true
    };

    customExercises.unshift(exercise);
    save(STORAGE.custom, customExercises);
    renderExercises();
    renderCustomExercises();

    document.getElementById("teacherForm").reset();
    document.getElementById("teacherMessage").textContent =
        "Đã tạo bài tập và lưu trên trình duyệt này.";
}

function setupMenu() {
    const toggle = document.getElementById("menuToggle");
    const nav = document.getElementById("mainNav");

    toggle.addEventListener("click", () => nav.classList.toggle("open"));
    nav.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => nav.classList.remove("open"));
    });
}

function init() {
    document.getElementById("year").textContent = new Date().getFullYear();

    const savedStudent = load(STORAGE.student, null);
    if (savedStudent) {
        document.getElementById("studentName").value = savedStudent.name || "";
        document.getElementById("studentId").value = savedStudent.studentId || "";
    }

    renderChapters();
    renderExercises();
    renderResults();
    renderCustomExercises();
    setupMenu();

    document.getElementById("searchExercise").addEventListener("input", () => renderExercises());
    document.getElementById("difficultyFilter").addEventListener("change", () => renderExercises());
    document.getElementById("showSolution").addEventListener("click", showSolution);
    document.getElementById("submitCode").addEventListener("click", submitCode);
    document.getElementById("teacherForm").addEventListener("submit", createExercise);

    document.getElementById("clearCustomExercises").addEventListener("click", () => {
        if (!customExercises.length) {
            alert("Chưa có bài tập tự tạo để xóa.");
            return;
        }

        if (confirm("Bạn có chắc muốn xóa toàn bộ bài tập do giáo viên tạo?")) {
            customExercises = [];
            save(STORAGE.custom, customExercises);
            selectedExerciseId = null;
            document.getElementById("selectedExercise").textContent =
                "Hãy chọn một bài tập trong danh sách phía trên.";
            renderExercises();
            renderCustomExercises();
        }
    });
}

document.addEventListener("DOMContentLoaded", init);
