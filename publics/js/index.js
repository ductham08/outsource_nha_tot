AOS.init();

$(".btn-mobile").click(function () {
    $(".btn-mobile").toggleClass("active");
    $(".menu-move").toggleClass("active");
});

flatpickr("#input-view-home", {
    dateFormat: "d/m/Y", // Định dạng ngày tháng
    defaultDate: "today",
    locale: {
        firstDayOfWeek: 1, // Tuần bắt đầu từ thứ Hai
        weekdays: {
            shorthand: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"], // Ngày trong tuần
            longhand: [
                "Chủ Nhật",
                "Thứ Hai",
                "Thứ Ba",
                "Thứ Tư",
                "Thứ Năm",
                "Thứ Sáu",
                "Thứ Bảy"
            ]
        },
        months: {
            shorthand: [
                "Th1",
                "Th2",
                "Th3",
                "Th4",
                "Th5",
                "Th6",
                "Th7",
                "Th8",
                "Th9",
                "Th10",
                "Th11",
                "Th12"
            ], // Tháng
            longhand: [
                "Tháng Một",
                "Tháng Hai",
                "Tháng Ba",
                "Tháng Tư",
                "Tháng Năm",
                "Tháng Sáu",
                "Tháng Bảy",
                "Tháng Tám",
                "Tháng Chín",
                "Tháng Mười",
                "Tháng Mười Một",
                "Tháng Mười Hai"
            ]
        }
    }
});


flatpickr("#input-buy-home", {
    dateFormat: "d/m/Y", // Định dạng ngày tháng
    defaultDate: "today",
    locale: {
        firstDayOfWeek: 1, // Tuần bắt đầu từ thứ Hai
        weekdays: {
            shorthand: ["CN", "T2", "T3", "T4", "T5", "T6", "T7"], // Ngày trong tuần
            longhand: [
                "Chủ Nhật",
                "Thứ Hai",
                "Thứ Ba",
                "Thứ Tư",
                "Thứ Năm",
                "Thứ Sáu",
                "Thứ Bảy"
            ]
        },
        months: {
            shorthand: [
                "Th1",
                "Th2",
                "Th3",
                "Th4",
                "Th5",
                "Th6",
                "Th7",
                "Th8",
                "Th9",
                "Th10",
                "Th11",
                "Th12"
            ], // Tháng
            longhand: [
                "Tháng Một",
                "Tháng Hai",
                "Tháng Ba",
                "Tháng Tư",
                "Tháng Năm",
                "Tháng Sáu",
                "Tháng Bảy",
                "Tháng Tám",
                "Tháng Chín",
                "Tháng Mười",
                "Tháng Mười Một",
                "Tháng Mười Hai"
            ]
        }
    }
});
