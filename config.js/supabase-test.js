async function testSupabaseConnection() {
  const resultBox = document.getElementById("supabase-test-result");
  if (!resultBox) return;

  resultBox.innerHTML = "جاري الاتصال بقاعدة البيانات...";

  const { data, error } = await supabaseClient
    .from("teams")
    .select("id, name")
    .limit(5);

  if (error) {
    console.error(error);
    resultBox.innerHTML = "فشل الاتصال: " + error.message;
    return;
  }

  if (!data || data.length === 0) {
    resultBox.innerHTML = "تم الاتصال بنجاح، لكن لا توجد فرق لعرضها.";
    return;
  }

  resultBox.innerHTML = `
    <div style="padding:10px;background:#0b1d3a;border-radius:10px;color:white;">
      <h3 style="margin-bottom:10px;">تم الاتصال بنجاح ✅</h3>
      <ul style="margin:0;padding-right:18px;">
        ${data.map(team => `<li>${team.name}</li>`).join("")}
      </ul>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", testSupabaseConnection);
