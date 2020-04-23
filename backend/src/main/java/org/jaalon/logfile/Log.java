package org.jaalon.logfile;

import java.util.Date;

public class Log {
    private final long id;
    private String content;
    private final Date date;

    Log(long id, String content, Date date) {
        this.id = id;
        this.content = content;
        this.date = date;
    }

    public long getId() {
        return id;
    }

    public String getContent() {
        return content;
    }

    public Date getDate() {
        return date;
    }

    public void setContent(String content) {
        this.content = content;
    }
}
