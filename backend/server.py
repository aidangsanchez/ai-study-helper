from transformers import pipeline

# smaller + faster than bart-large
summarizer = pipeline(
    "summarization",
    model="sshleifer/distilbart-cnn-12-6"
)

def summarize_text(text):
    if not text or len(text) < 50:
        return "Please enter more text to summarize."

    result = summarizer(
        text,
        max_length=130,
        min_length=40,
        do_sample=False
    )

    return result[0]["summary_text"]