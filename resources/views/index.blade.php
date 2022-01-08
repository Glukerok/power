<!doctype html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">

    <!-- Icon -->
    <link rel="icon" href="{{ url('images/main/icon.png') }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Styles -->
    <link href="{{ asset('/css/app.css') }}" rel="stylesheet">
</head>
<body>
    <div id="app"></div>
    <script src="{{ asset('/js/app.js') }}"></script>
</body>
</html>
