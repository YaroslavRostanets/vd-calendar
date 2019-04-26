<template>
    <table id="new-cons" class="table table-striped table-bordered nowrap dataTable no-footer dtr-inline" role="grid"
           aria-describedby="new-cons_info">
        <thead>
        <tr role="row">
            <th class="sorting_asc" tabindex="0" aria-controls="new-cons" rowspan="1" colspan="1"
                aria-label="First name: activate to sort column descending" style="width: 88px;" aria-sort="ascending">
                First name
            </th>
            <th class="sorting" tabindex="0" aria-controls="new-cons" rowspan="1" colspan="1"
                aria-label="Last name: activate to sort column ascending" style="width: 86px;">Last name
            </th>
            <th class="sorting" tabindex="0" aria-controls="new-cons" rowspan="1" colspan="1"
                aria-label="Position: activate to sort column ascending" style="width: 195px;">Position
            </th>
            <th class="sorting" tabindex="0" aria-controls="new-cons" rowspan="1" colspan="1"
                aria-label="Office: activate to sort column ascending" style="width: 85px;">Office
            </th>
            <th class="sorting" tabindex="0" aria-controls="new-cons" rowspan="1" colspan="1"
                aria-label="Age: activate to sort column ascending" style="width: 36px;">Age
            </th>
            <th class="sorting" tabindex="0" aria-controls="new-cons" rowspan="1" colspan="1"
                aria-label="Start date: activate to sort column ascending" style="width: 84px;">Start date
            </th>
            <th class="sorting" tabindex="0" aria-controls="new-cons" rowspan="1" colspan="1"
                aria-label="Salary: activate to sort column ascending" style="width: 63px;">Salary
            </th>
            <th class="sorting" tabindex="0" aria-controls="new-cons" rowspan="1" colspan="1"
                aria-label="Extn.: activate to sort column ascending" style="width: 48px;">Extn.
            </th>
            <th class="sorting" tabindex="0" aria-controls="new-cons" rowspan="1" colspan="1"
                aria-label="E-mail: activate to sort column ascending" style="width: 196px;">E-mail
            </th>
        </tr>
        </thead>
        <tbody>
        <tr role="row" class="odd">
            <td class="sorting_1" tabindex="0" style="">Airi</td>
            <td style="">Satou</td>
            <td style="">Accountant</td>
            <td style="">Tokyo</td>
            <td style="">33</td>
            <td style="">2008/11/28</td>
            <td style="">$162,700</td>
            <td style="">5407</td>
            <td style="">a.satou@datatables.net</td>
        </tr>
        <tr role="row" class="even">
            <td class="sorting_1" tabindex="0">Angelica</td>
            <td style="">Ramos</td>
            <td style="">Chief Executive Officer (CEO)</td>
            <td style="">London</td>
            <td style="">47</td>
            <td style="">2009/10/09</td>
            <td style="">$1,200,000</td>
            <td style="">5797</td>
            <td style="">a.ramos@datatables.net</td>
        </tr>
        <tr role="row" class="odd">
            <td class="sorting_1" tabindex="0">Ashton</td>
            <td style="">Cox</td>
            <td style="">Junior Technical Author</td>
            <td style="">San Francisco</td>
            <td style="">66</td>
            <td style="">2009/01/12</td>
            <td style="">$86,000</td>
            <td style="">1562</td>
            <td style="">a.cox@datatables.net</td>
        </tr>
        <tr role="row" class="even">
            <td class="sorting_1" tabindex="0">Bradley</td>
            <td style="">Greer</td>
            <td style="">Software Engineer</td>
            <td style="">London</td>
            <td style="">41</td>
            <td style="">2012/10/13</td>
            <td style="">$132,000</td>
            <td style="">2558</td>
            <td style="">b.greer@datatables.net</td>
        </tr>
        <tr role="row" class="odd">
            <td class="sorting_1" tabindex="0">Brenden</td>
            <td style="">Wagner</td>
            <td style="">Software Engineer</td>
            <td style="">San Francisco</td>
            <td style="">28</td>
            <td style="">2011/06/07</td>
            <td style="">$206,850</td>
            <td style="">1314</td>
            <td style="">b.wagner@datatables.net</td>
        </tr>
        <tr role="row" class="even">
            <td class="sorting_1" tabindex="0">Brielle</td>
            <td style="">Williamson</td>
            <td style="">Integration Specialist</td>
            <td style="">New York</td>
            <td style="">61</td>
            <td style="">2012/12/02</td>
            <td style="">$372,000</td>
            <td style="">4804</td>
            <td style="">b.williamson@datatables.net</td>
        </tr>
        <tr role="row" class="odd">
            <td class="sorting_1" tabindex="0">Bruno</td>
            <td style="">Nash</td>
            <td style="">Software Engineer</td>
            <td style="">London</td>
            <td style="">38</td>
            <td style="">2011/05/03</td>
            <td style="">$163,500</td>
            <td style="">6222</td>
            <td style="">b.nash@datatables.net</td>
        </tr>
        <tr role="row" class="even">
            <td class="sorting_1" tabindex="0">Caesar</td>
            <td style="">Vance</td>
            <td style="">Pre-Sales Support</td>
            <td style="">New York</td>
            <td style="">21</td>
            <td style="">2011/12/12</td>
            <td style="">$106,450</td>
            <td style="">8330</td>
            <td style="">c.vance@datatables.net</td>
        </tr>
        <tr role="row" class="odd">
            <td class="sorting_1" tabindex="0">Cara</td>
            <td style="">Stevens</td>
            <td style="">Sales Assistant</td>
            <td style="">New York</td>
            <td style="">46</td>
            <td style="">2011/12/06</td>
            <td style="">$145,600</td>
            <td style="">3990</td>
            <td style="">c.stevens@datatables.net</td>
        </tr>
        <tr role="row" class="even">
            <td class="sorting_1" tabindex="0">Cedric</td>
            <td style="">Kelly</td>
            <td style="">Senior Javascript Developer</td>
            <td style="">Edinburgh</td>
            <td style="">22</td>
            <td style="">2012/03/29</td>
            <td style="">$433,060</td>
            <td style="">6224</td>
            <td style="">c.kelly@datatables.net</td>
        </tr>
        </tbody>
    </table>
</template>

<script>
    import './thema.css';

    export default {
        name: "vdDatatable"
    }
</script>

<style scoped>

</style>