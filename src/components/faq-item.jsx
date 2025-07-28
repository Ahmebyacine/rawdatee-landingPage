export default function FaqItem({
  question,
  answer,
}) {
  return (
    <div className="mb-4 text-left rtl:text-right">
      <h3 className="font-semibold text-lg">{question}</h3>
      <p className="text-muted-foreground">{answer}</p>
    </div>
  );
}
