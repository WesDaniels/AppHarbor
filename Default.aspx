<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Default.aspx.cs" Inherits="GitHub.AppHarbor.Default" MasterPageFile="master/Site_WesDaniels.Master"%>

<asp:Content ContentPlaceHolderID="bodyPlaceHolder" runat="server">
<script>
    $(document).ready(function () {
        $.ajax({
            url: 'dataservices/SiteArticles.svc/Load/Default',
            success: function (data) {
                $.each(data, function(i, item)
                {
                    $('#contentText').html(item)
                });
            }
        });
    });
</script>
</asp:Content>