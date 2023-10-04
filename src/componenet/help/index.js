

export let hlp1 = (a) => {
    if (a == "vacotion") {
        return "day"
    } else if (a == "rent") {
        return "month"
    } else {
        return "for sell"
    }
}

export let filter = (a, b, c) => {
    if (a && b) {
        let filter = c.filter(e => e.for == a && e.type == b)
        return filter
    } else if (a) {
        let filter = c.filter(e => e.for == a)
        return filter
    } else if (b) {
        let filter = c.filter(e => e.type == b)
        return filter
    } else {
        let filter = c
        return filter
    }
}

