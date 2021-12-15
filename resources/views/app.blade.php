<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="csrf-token" value="{{ csrf_token() }}"/>
        <meta name="csrf-token" content="{{ csrf_token() }}">

        <title>Laravel Vue CRUD App - TechvBlogs</title>
        <link href="https://fonts.googleapis.com/css?family=Nunito:200,600" rel="stylesheet" type="text/css">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-giJF6kkoqNQ00vy+HMDP7azOuL0xtbfIcaT9wjKHr8RbDVddVHyTfAAsrekwKmP1" crossorigin="anonymous">
        <link href="{{ mix('css/app.css') }}" type="text/css" rel="stylesheet"/>
        <script src="https://code.iconify.design/2/2.0.3/iconify.min.js"></script>

    </head>
    <body>
         
        @if (Auth::guard('admin')->check())
            @php
                $user_auth_data = [
                'isLoggedin' => true,
                'user' =>  Auth::guard('admin')->user()
                ];
            @endphp
        @elseif(Auth::check())
            @php
                $user_auth_data = [
                'isUserLoggedin' => true,
                'user' =>  Auth::user()
                ];
            @endphp
        @else
            @php
            $user_auth_data = [
            'isLoggedin' => false,
            'isUserLoggedin'=>false,
            ];
            @endphp
        @endif
        <script>
        window.Laravel = JSON.parse(atob('{{ base64_encode(json_encode($user_auth_data)) }}'));
        </script>
        <div id="message">
          
        </div>
      
        <div id="app" class="container">
        </div>


        <script src="{{ asset('js/app.js') }}" type="text/javascript"></script>
       
    </body>
</html>