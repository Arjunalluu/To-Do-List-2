// app/api/todos/route.js
import dbConnect from '../../../lib/dbConnect';
import Todo from '../../../models/Todo';

export async function GET() {
  try {
    await dbConnect();
    const todos = await Todo.find({});
    return new Response(JSON.stringify({ success: true, data: todos }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
  }
}

export async function POST(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const todo = await Todo.create(body);
    return new Response(JSON.stringify({ success: true, data: todo }), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
  }
}

export async function PATCH(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { id, text, completed, dueDate } = body;
    const todo = await Todo.findByIdAndUpdate(
      id,
      { text, completed, dueDate },
      { new: true }
    );
    return new Response(JSON.stringify({ success: true, data: todo }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
  }
}

export async function DELETE(request) {
  try {
    await dbConnect();
    const body = await request.json();
    const { id } = body;
    if (!id) return new Response(JSON.stringify({ success: false, error: 'ID is missing' }), { status: 400 });
    await Todo.findByIdAndDelete(id);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), { status: 400 });
  }
}
