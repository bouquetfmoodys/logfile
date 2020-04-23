package org.jaalon.logfile;

import org.springframework.web.bind.annotation.*;

import java.util.*;
import java.util.List;

@RestController
public class LogController {
    Map<Integer, Log> logs = new LinkedHashMap<>();

    public LogController() {
        logs.put(1, new Log(1, "Todo 1", new Date()));
        logs.put(2, new Log(2, "Todo 2", new Date()));
        logs.put(3, new Log(3, "Todo 3", new Date()));
    }

    @RequestMapping("/logs")
    public Map<String, List<Log>> getLogs() {
        Map<String, List<Log>> result = new HashMap<>();
        result.put("logs", new LinkedList<>(logs.values()));
        return result;
    }

    @RequestMapping(value = "/logs", method = RequestMethod.PUT)
    public @ResponseBody Log updateLog(@RequestBody Log log) {
        Log savedLog = logs.get(log.getId());
        savedLog.setContent(log.getContent());
        return log;
    }
}
