<template>
    <div>
        <i-breadcrumb title="Breadcrumb">
            <ol class="breadcrumb">
                <li><a href="#">Home</a></li>
                <li><a href="#">Library</a></li>
                <li class="active">Data</li>
            </ol>
        </i-breadcrumb>

        <i-breadcrumb title="Breadcrumb">
            <ol class="breadcrumb">
                <li><a href=""><i class="fa fa-home"></i></a></li>
                <li><a href="#"><i class="fa fa-user"></i> Library</a></li>
                <li class="active">Data</li>
            </ol>
        </i-breadcrumb>
    </div>
</template>
<script>
    import iBreadcrumb from '../../components/breadcrumb'
    export default {
        components: {
            iBreadcrumb
        }
    }

</script>
