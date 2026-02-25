
import connectDB from "../../../lib/mongodb";

export async function GET() {
  try {
    await connectDB();
    return new Response(JSON.stringify({ message: "✅ MongoDB Connected" }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: "❌ Connection Failed" }), {
      status: 500,
    });
  }
}
