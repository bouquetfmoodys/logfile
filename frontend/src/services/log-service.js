
class logService {
    data = {
        logs: [
            {
                id: 5,
                title: "Test",
                date: "2019-11-12",
                position: 0
            },
            {
                id: 8,
                title: "Test 2",
                date: "2019-11-12",
                position: 1
            },
            {
                id: 32,
                title: "Test 3",
                date: "2019-11-14",
                position: 2
            }
        ]
    };

    getLogs() {
        return this.data.logs;
    }

    addLogAt(log) {
        this.data.logs.concat(log)
    }


}

export default LogService;