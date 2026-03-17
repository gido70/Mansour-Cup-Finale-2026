console.log("🔥 TEST FILE WORKING");

async function testConnection() {
  const { data, error } = await supabaseClient
    .from("teams")
    .select("*");

  if (error) {
    console.error("❌ خطأ:", error);
  } else {
    console.log("✅ البيانات:", data);
  }
}

testConnection();
