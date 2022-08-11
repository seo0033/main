<? include 'head.sub.php'; ?>

<div class="SubPage">
    <div class="SubMain">
        <div class="container">
            <div class="sub_slogan">
                <?= $e_slogan ?>
            </div>
            <div class="sub_title">
                <?= $page_title ?>
            </div>
        </div>
    </div>
    <div class="PageInfo">
        <div class="container">
            <ol>
                <li><a href="/project"><i class="xi-home"></i> Home</a></li>
                <li><a href="sub0<?= $subnum ?>.php"><?= $sub_title ?></a></li>
            </ol>
        </div>
    </div>
    <style>
        .SubMain {
            background: url(./img/main0<?= $subnum ?>.jpg) no-repeat center center/cover
        }
    </style>
    <div class="SubContent">
        <aside>
            <div class="Lnb">
                <? include 'nav.php' ?>
            </div>
            <div class="customer">
                <? include 'customer.php' ?>
            </div>
        </aside>
        <article>