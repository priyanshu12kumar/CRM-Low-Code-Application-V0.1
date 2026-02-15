
def GET_INSTRUCTION_HTML():
    return """
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>API Instruction Manual</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet">
</head>
<body class="bg-slate-50 text-slate-800 font-sans">
    <div class="max-w-4xl mx-auto py-12 px-6">
        <header class="mb-12 text-center">
            <h1 class="text-4xl font-extrabold text-indigo-600 mb-2">Form Builder Backend</h1>
            <p class="text-lg text-slate-600">Complete API Documentation & Instruction Manual</p>
        </header>

        <section class="mb-12 bg-white rounded-xl shadow-md p-8">
            <h2 class="text-2xl font-bold mb-4 border-b pb-2 text-indigo-500">
                <i class="fas fa-info-circle mr-2"></i> Overview
            </h2>
            <p class="mb-4 leading-relaxed">
                This backend system is designed to handle complex JSON-based form configurations. 
                It utilizes <strong>FastAPI</strong> for high-performance routing and 
                <strong>SQLite</strong> for persistent storage in <code>index.db</code>.
            </p>
        </section>

        <section class="space-y-6">
            <h2 class="text-2xl font-bold mb-4 border-b pb-2 text-indigo-500">
                <i class="fas fa-network-wired mr-2"></i> Endpoints
            </h2>

            <!-- GET /api/files -->
            <div class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-green-500">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-bold bg-green-100 text-green-700 px-2 py-1 rounded">GET</span>
                    <code class="text-indigo-600 font-mono">/api/files</code>
                </div>
                <p class="text-sm text-slate-600">Fetches a list of all stored form configuration names.</p>
            </div>

            <!-- POST /api/file-content -->
            <div class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-blue-500">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-bold bg-blue-100 text-blue-700 px-2 py-1 rounded">POST</span>
                    <code class="text-indigo-600 font-mono">/api/file-content</code>
                </div>
                <p class="text-sm text-slate-600 mb-2">Retrieves the complete JSON body for a specified form name.</p>
                <div class="bg-slate-100 p-3 rounded text-xs font-mono">
                    { "name": "Placement 2026" }
                </div>
            </div>

            <!-- POST /api/save-json -->
            <div class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-amber-500">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-bold bg-amber-100 text-amber-700 px-2 py-1 rounded">POST</span>
                    <code class="text-indigo-600 font-mono">/api/save-json</code>
                </div>
                <p class="text-sm text-slate-600 mb-2">Saves a new form or updates an existing one. Accepts the full form JSON structure.</p>
                <div class="bg-slate-100 p-3 rounded text-xs font-mono">
                    { "name": "...", "content": { ... } }
                </div>
            </div>

            <!-- POST /api/delete-file -->
            <div class="bg-white rounded-lg shadow-sm p-6 border-l-4 border-red-500">
                <div class="flex items-center justify-between mb-2">
                    <span class="text-sm font-bold bg-red-100 text-red-700 px-2 py-1 rounded">POST</span>
                    <code class="text-indigo-600 font-mono">/api/delete-file</code>
                </div>
                <p class="text-sm text-slate-600 mb-2">Permanently removes a form configuration from the database.</p>
            </div>
        </section>

        <footer class="mt-16 text-center text-slate-400 text-sm">
            Powered by Python FastAPI & SQLite &bull; 2024
        </footer>
    </div>
</body>
</html>
"""
