In 2015, I noticed that it was rather inconvenient for my classmates to check the timetable. Our timetable was split into even and odd weeks, and we often forgot which timetable we were using that week. We also didn't have our hardcopy timetable with us all the time. I endeavoured to solve this by creating an automated chatbot on the messaging app Telegram for us to check what lessons we had that day. Over the next 3 years, I continued to add new features to the bot. This was one of my first major projects along my programming journey.

The chatbot can be accessed [here](https://telegram.me/threeoheight_bot).

## Features

### Timetable

To access the timetable, simply send the command `/{odd/even}{day}`.

![eventuesday](timetable-bot/eventuesday.png)

Our class had students who took different humanities subjects. The bot tailors their responses to reflect that. Students can set their humanities subject using the command `/sethumans`, and the bot will save it and send them a personalised timetable.

![sethumans](timetable-bot/sethumans.png)

However, sometimes we forget whether this week is an 'even' or 'odd' week. That's where `/weekno` comes in.

![weekno](timetable-bot/weekno.png)

We often only needed to know the timetable for the next day. There's a command for that: `/tomorrow`.

![tomorrow](timetable-bot/tomorrow.png)

Sometimes, teachers set the deadline for homework as "the next lesson". The bot can help you find out when the next lesson of a certain subject is using `/next`.

![next](timetable-bot/next.png)

### Reminders

Now that the bot already has access to our timetable, why not let it remind us when we have certain lessons the next day? For example, we often forget to bring our PE attire on days when there are PE lessons. The bot sends a reminder to the class group chat the day before a PE lesson to remind us to pack for it. This also works for chemistry and biology lab experiments.

![pe reminder](timetable-bot/pe.png)

### Homework

How about homework? The bot can handle that too!

Use `/addhomework` to tell the bot about a new piece of homework and its due date.

![addhomework](timetable-bot/addhomework.png)

See the homework that's due using `/gethomework` or `/thisweek`, which only returns the homework due in the next 7 days.

![gethomework](timetable-bot/gethomework.png)

![thisweek](timetable-bot/thisweek.png)

Accidentally added a piece of homework, or the teacher decided not to collect it? Delete it using `/delhomework`, which comes complete with a custom keyboard that lists out all the homework so you can choose which to delete.

![delhomework1](timetable-bot/delhomework1.png)

![delhomework2](timetable-bot/delhomework2.png)

### Birthdays

All these features have been very academically oriented... To add a little joy into student life, the bot remembers the birthdays of everyone in class and wishes them a happy birthday too!

![birthday](timetable-bot/birthday.png)

The bot can also tell you whose birthday is upcoming next with `/nextbirthday`.

![nextbirthday](timetable-bot/nextbirthday.png)

### Miscellaneous

Feeling down? Send `/cute` to the bot to see a randomly selected image or gif.

![cute](timetable-bot/cute.png)
