@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <script src="{{ mix('js/app.js') }}" type="text/javascript"></script>
            <script>
    
                Echo.channel('events')
                    .listen('RealTimeMessage', (e) => console.log('RealTimeMessage: ' + e.message));
            </script>
        </div>
    </div>
</div>
@endsection
